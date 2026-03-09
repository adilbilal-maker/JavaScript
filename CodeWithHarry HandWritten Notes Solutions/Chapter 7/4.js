

<!DOCTYPE html>
<html>
<head>
    <title>Navbar Example</title>
</head>
<body>

<ul id="navbar">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>

<script>
    let items = document.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "cyan";
    }
</script>
</body>
</html>
