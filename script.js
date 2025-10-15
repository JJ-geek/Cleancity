let reports = [];

function addReport() {
  const input = document.getElementById("reportInput");
  const text = input.value.trim();

  // Fault tolerance
  if (text === "") {
    alert("⚠️ Please describe the issue before submitting!");
    return;
  }

  // Prevent duplicates
  if (reports.some(r => r.message.toLowerCase() === text.toLowerCase())) {
    alert("This issue has already been reported!");
    return;
  }

  const report = {
    message: text,
    time: new Date().toLocaleString(),
  };

  reports.unshift(report);
  input.value = "";
  renderReports();
}

function renderReports() {
  const list = document.getElementById("reportList");
  list.innerHTML = "";

  if (reports.length === 0) {
    list.innerHTML = `<p class="empty">No reports yet. Be the first to report an issue 🌱</p>`;
    return;
  }

  reports.forEach((r) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${r.time}</strong><br>${r.message}`;
    list.appendChild(li);
  });
}

// Show empty state on load
document.addEventListener("DOMContentLoaded", renderReports);
