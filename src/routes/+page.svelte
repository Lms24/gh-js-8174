<!-- 
This is just a very simple page with a button to throw an example error.
Feel free to delete this file and the entire sentry route.  
-->

<script>
  export let data;
</script>

<div>
  <h1>
    {data.msg}
  </h1>
  <p>
    {JSON.stringify(data.todo)}
  </p>
</div>
