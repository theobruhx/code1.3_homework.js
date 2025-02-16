document.addEventListener('DOMContentLoaded', function () {
    //1
    let count = 0;
    const button = document.getElementById('clicker');
    const display = document.getElementById('counter');
    const message = document.getElementById('finish');
    const block = document.getElementById('block');

    button.addEventListener('click', function () {
      count++;
      display.textContent = count;

      if (count >= 15) {
        button.style.backgroundColor = "#ffffff";
        button.disabled = true;
        message.textContent = "NO MORE CLICK";
        block.style.backgroundColor = "#000000";
      }
    });

   //2
   let counter= 10;
      const time = document.getElementById('time');
      const resettime = document.getElementById('resettime');
      const block2 = document.getElementById('block2');
      let interval;

      function startTimer() {
        interval = setInterval(function () {
          counter--;
          time.textContent = counter;

          if (counter <= 0) {
            clearInterval(interval);
            time.textContent = "no more";
            block2.style.backgroundColor = "#ffffff";
          }
        }, 1000);
      }

      resettime.addEventListener('click', function () {
        clearInterval(interval);
        counter = 10;
        time.textContent = counter;
        startTimer();
        block2.style.backgroundColor = `rgb(58, 82, 240)`;
      });

      startTimer();

      //3
      let count2 = 0;
      let interval2;
      const time2 = document.getElementById('time2');
      const startButton = document.getElementById('btnstart');
      const stopButton = document.getElementById('btnstop');
      const resetButton = document.getElementById('btnreset');

      console.log (startButton, stopButton, resetButton)

       // элементы были найдены
    if (startButton && stopButton && resetButton) {
        startButton.addEventListener('click', function () {
          if (!interval2) {
            interval2 = setInterval(function () {
              count2++;
              time2.textContent = count2;
            }, 1000);
          }
        });

        stopButton.addEventListener('click', function () {
          clearInterval(interval2);
          interval2 = null;
        });

        resetButton.addEventListener('click', function () {
          clearInterval(interval2);
          interval2 = null;
          count2 = 0;
          time2.textContent = count2;
        });
      } else {
        console.error("Не найдены кнопки");
      }
    });
