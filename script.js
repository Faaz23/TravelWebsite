
window.onload = function () 
{
	window.addEventListener('scroll', function (e) {

		if (window.pageYOffset > 100) 
        {
			document.querySelector("header").classList.add('is-scrolling');
		} 
        else 
        {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click', function (event) {
        event.stopPropagation(); 
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
      });
      
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function() {
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
      const adults = document.getElementById('adult').value;
      const date = document.getElementById('date').value;
  
      const apiUrl = `https://api.aviationstack.com/v1/flights?access_key=7e16b6902038d5cd5c0c1dbcec31a8c7&limit=10&sort=price&order=asc&departure_date=${date}&departure_location=${from}&arrival_location=${to}`;
  
      fetch(apiUrl)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              const resultsDiv = document.getElementById('results');
              if (data.data.length === 0) {
                  resultsDiv.innerHTML = '<p>No flights found.</p>';
              } else {
                  let flightInfo = '';
                  data.data.forEach(flight => {
                      try {
                          flightInfo += `<p>Flight ${flight.flight_number}</p>`;
                      } catch (error) {
                          console.error(`Error processing flight: ${error}`);
                          flightInfo += `<p>Error fetching flight details.</p>`;
                      }
                  });
                  resultsDiv.innerHTML = flightInfo;
              }
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              const resultsDiv = document.getElementById('results');
              resultsDiv.innerHTML = `<p>Error fetching flight data. Please try again later.</p>`;
          });
    });
  });


  document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const destination = document.getElementById('destination').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const numGuests = document.getElementById('num-guests').value;
  
    document.getElementById('confirmed-destination').textContent = destination;
    document.getElementById('confirmed-check-in').textContent = checkIn;
    document.getElementById('confirmed-check-out').textContent = checkOut;
    document.getElementById('confirmed-guests').textContent = numGuests;
  
    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('bookingConfirmation').style.display = 'block';
  });

  document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const destination = document.getElementById('destination').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const numGuests = document.getElementById('num-guests').value;
  

    localStorage.setItem('destination', destination);
    localStorage.setItem('checkIn', checkIn);
    localStorage.setItem('checkOut', checkOut);
    localStorage.setItem('numGuests', numGuests);
  
    document.getElementById('bookingConfirmation').style.display = 'block';
    document.getElementById('confirmed-destination').textContent = destination;
    document.getElementById('confirmed-check-in').textContent = checkIn;
    document.getElementById('confirmed-check-out').textContent = checkOut;
    document.getElementById('confirmed-guests').textContent = numGuests;
  
    
  });
  

