




const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('themeToggle');
  
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-bs-theme');
      if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeToggleBtn.textContent = 'Switch to Dark Theme';
      } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeToggleBtn.textContent = 'Switch to Light Theme';
      }
    });

maptilersdk.config.apiKey = 'FHMMwK9osnRZAFBniQmJ';
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: [16.62662018, 49.2125578], // starting position [lng, lat]
  zoom: 14, // starting zoom
});
const gc = new maptilersdkMaptilerGeocoder.GeocodingControl();
map.addControl(gc, 'top-left');