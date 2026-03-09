<!DOCTYPE html>
<html>
<head>
    <title>First and Last Child Example</title>
</head>
<body>

<div id="parent">
    <p>First</p>
    <p>Second</p>
    <p>Third</p>
</div>

<script>
    let parent = document.getElementById("parent");

    parent.firstElementChild.style.color = "green";
    parent.lastElementChild.style.color = "green";
</script>
</body>
</html>
