Highcharts.setOptions({
  time: {
    timezone: window.APP_TIME_ZONE
  }
});

function showTIRChart(div, data, addon, name) {
  Highcharts.chart(div, {
      chart: {
          type: 'area',
          zoomType: 'x',
      },
      title: {
          text: ''
      },
      tooltip: {
          borderWidth: 0,
          backgroundColor: 'yellow',
          pointFormat: '{point.y}',
          //headerFormat: '',
          shadow: false,
          style: {
              fontSize: '16px',
              color: '#000',
          },
          formatter: function() {
              if (this.y == 0) {
                return false;
              }
            return this.y + addon;
          }
      },
      xAxis: {
          crosshair: true,
          type: 'datetime',
          labels: {
            style: {
              color: "#a6b0cf"
            }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'RPM',
              style: {
                color: "#f6f6f6"
              }
          },
          labels: {
            style: {
              color: "#a6b0cf"
            }
          }
      },
      legend: {
          enabled: false
      },
      exporting: {
        buttons: {
          contextButton: {
            theme: {
              fill: "#eee"
            }
          }
        }
      },
      plotOptions: {
          area: {
            color: '#ff5b5b',
          }
      },
      series: [{
          type: 'area',
          name: name,
          data: data,
          fillOpacity: 0.3,
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          }
      }]
  });
};

function showRTChart(div, data) {
  Highcharts.chart(div, {
      chart: {
          type: 'area',
          zoomType: 'x',
      },
      title: {
          text: ''
      },

      tooltip: {
          borderWidth: 0,
          backgroundColor: 'yellow',
          pointFormat: '{point.y}',
          //headerFormat: '',
          shadow: false,
          style: {
              fontSize: '16px',
              color: '#000',
          },
          formatter: function() {
              if (this.y == 0) {
                return false;
              }
              return this.y + ' ms';
          }
      },
      xAxis: {
          crosshair: false,
          type: 'datetime',
          labels: {
            style: {
              color: "#a6b0cf"
            }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Time',
              style: {
                color: "#f6f6f6"
              }
          },
          labels: {
            style: {
              color: "#a6b0cf"
            }
          }
      },
      legend: {
          enabled: false
      },
      exporting: {
        buttons: {
          contextButton: {
            theme: {
              fill: "#eee"
            }
          }
        }
      },
      plotOptions: {
          area: {
            color: '#ff5b5b',
          }
      },
      series: [{
          type: 'area',
          name: 'Response Time',
          data: data,
          fillOpacity: 0.3,
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          }
      }]
  });
};

function showPercentageChart(div, data, addon, name) {
  Highcharts.chart(div, {
      chart: {
          type: 'line',
          zoomType: 'x',
      },
      title: {
          text: ''
      },
      tooltip: {
          borderWidth: 0,
          backgroundColor: 'yellow',
          pointFormat: '{point.y}',
          //headerFormat: '',
          shadow: false,
          style: {
              fontSize: '16px',
              color: '#000',
          },
          formatter: function() {
            if (this.y == 0) {
              return false;
            }
            return this.y + ' %';
        }
      },
      xAxis: {
          crosshair: true,
          type: 'datetime',
          labels: {
            style: {
              color: "#a6b0cf"
            }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: '%',
              style: {
                color: "#f6f6f6"
              }
          },
          labels: {
            style: {
              color: "#a6b0cf"
            }
          }
      },
      legend: {
          enabled: false
      },
      exporting: {
        buttons: {
          contextButton: {
            theme: {
              fill: "#eee"
            }
          }
        }
      },
      plotOptions: {
          area: {
            color: '#ff5b5b',
          }
      },
      series: [{
          type: 'line',
          name: name,
          data: data,
          fillOpacity: 0.3,
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 2
            }
          }
      }]
  });
};


function showUsageChart(div, data, addon, name) {
  Highcharts.chart(div, {
      chart: {
          type: 'line',
          zoomType: 'x',
      },
      title: {
          text: ''
      },
      tooltip: {
          borderWidth: 0,
          backgroundColor: 'yellow',
          pointFormat: '{point.y}',
          //headerFormat: '',
          shadow: false,
          style: {
              fontSize: '16px',
              color: '#000',
          },
          formatter: function() {
              if (this.y == 0) {
                return false;
              }
            return bytes(this.y, true);
          }
      },
      xAxis: {
          crosshair: true,
          type: 'datetime',
          labels: {
            style: {
              color: "#a6b0cf"
            }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: '',
              style: {
                color: "#f6f6f6"
              }
          },
          labels: {
            style: {
              color: "#a6b0cf"
            }
          }
      },
      legend: {
          enabled: false
      },
      exporting: {
        buttons: {
          contextButton: {
            theme: {
              fill: "#eee"
            }
          }
        }
      },
      plotOptions: {
          area: {
            color: '#ff5b5b',
          }
      },
      series: [{
          type: 'line',
          name: name,
          data: data,
          fillOpacity: 0.3,
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 2
            }
          }
      }]
  });
};

function bytes(bytes, label) {
  if (bytes == 0) return '';
  var s = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  var e = Math.floor(Math.log(bytes)/Math.log(1024));
  var value = ((bytes/Math.pow(1024, Math.floor(e))).toFixed(2));
  e = (e<0) ? (-e) : e;
  if (label) value += ' ' + s[e];
  return value;
}

const recent = document.getElementById("recent")
const autoupdate = document.getElementById("autoupdate")

if(autoupdate) {
  // set autoupdate checked from localStorage is missing
  if (localStorage.getItem("autoupdate") === null) {
    localStorage.setItem("autoupdate", "true");
  }
  autoupdate.checked = localStorage.getItem("autoupdate") === "true";
  autoupdate.addEventListener('change', () => {
    localStorage.setItem("autoupdate", autoupdate.checked);
  });
}

if(recent) {
  const tbody = recent.querySelector("tbody")

  setInterval(() => {
    tr = tbody.children[0];
    from_timei = tr.getAttribute("from_timei") || ''

    if (!autoupdate.checked) {
      return;
    }

    fetch(`recent.js?from_timei=${from_timei}`, {
      headers: {
        "X-CSRF-Token": document.querySelector("[name='csrf-token']").content,
      },
    })
      .then(res => res.text())
      .then(html => {
        tbody.innerHTML = html + tbody.innerHTML;
    })
  }, 3000);
}
