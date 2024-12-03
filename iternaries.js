
const destination = localStorage.getItem('destination') || 'New York City';
const checkIn = localStorage.getItem('checkIn') || '5/14/15';
const checkOut = localStorage.getItem('checkOut') || '5/22/15';
const numGuests = localStorage.getItem('numGuests') || '1';


document.getElementById('destination').textContent = destination;
document.getElementById('check-in').textContent = checkIn;
document.getElementById('check-out').textContent = checkOut;
document.getElementById('num-guests').textContent = numGuests;

document.getElementById('departure-flight').textContent = 'Flight AY122, 5/14/15, 10:00 AM';
document.getElementById('car-rental').textContent = 'Honda Civic, SUV';
document.getElementById('stay').textContent = 'Hilton garden Inn, King Suite';
document.getElementById('return-flight').textContent = 'Flight AY1412, 5/22/15, 4:00 PM';