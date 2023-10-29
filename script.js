// Function to fetch IP, location, and ISP information from an API
async function fetchIPInfo() {
    try {
        const response = await fetch('https://ipinfo.io?token=b7511f7d-0014-4449-8d1e-77cd54629b7e');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching IP information:', error);
    }
}

// Function to update the HTML elements with the retrieved information
async function updateInfo() {
    const ipInfo = await fetchIPInfo();

    if (ipInfo) {
        document.getElementById('ipv4').textContent = ipInfo.ip;
        document.getElementById('ipv6').textContent = ipInfo.ip6 || 'N/A';
        document.getElementById('location').textContent = `${ipInfo.city}, ${ipInfo.region}, ${ipInfo.country}`;
        document.getElementById('isp').textContent = ipInfo.org || 'N/A';
    }
}

updateInfo();
