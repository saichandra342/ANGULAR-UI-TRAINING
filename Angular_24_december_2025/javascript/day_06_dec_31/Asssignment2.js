<script>
  function createCounter() {
    let count = 0;   // private variable (closure)

    return {
      increment: function () {
        count++;
        return count;
      },
      decrement: function () {
        count--;
        return count;
      },
      reset: function () {
        count = 0;
        return count;
      }
    };
  }

  // Initialize counter once
  const counter = createCounter();

  function increment() {
    document.getElementById("count").innerText = counter.increment();
  }

  function decrement() {
    document.getElementById("count").innerText = counter.decrement();
  }

  function reset() {
    document.getElementById("count").innerText = counter.reset();
  }
</script>

