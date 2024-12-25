<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Classroom Clone</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f1f3f4;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #3c4043;
            color: white;
            padding: 20px;
            text-align: center;
        }

        nav {
            background-color: #4285f4;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-around;
        }

        nav a {
            color: white;
            text-decoration: none;
            padding: 10px;
            font-weight: bold;
        }

        nav a:hover {
            background-color: #3367d6;
        }

        .container {
            display: flex;
            margin-top: 20px;
        }

        .sidebar {
            width: 250px;
            background-color: #ffffff;
            padding: 15px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        }

        .sidebar h2 {
            font-size: 18px;
            color: #333;
        }

        .sidebar ul {
            padding: 0;
            list-style-type: none;
        }

        .sidebar ul li {
            margin-bottom: 15px;
        }

        .sidebar ul li a {
            text-decoration: none;
            color: #4285f4;
            font-size: 16px;
        }

        .sidebar ul li a:hover {
            background-color: #e8f0fe;
            padding: 10px;
            border-radius: 5px;
        }

        .main-content {
            flex: 1;
            padding: 20px;
        }

        .card {
            background-color: white;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        .card h3 {
            margin-top: 0;
        }

        .card .task {
            background-color: #f8f9fa;
            padding: 15px;
            margin-top: 10px;
            border-radius: 5px;
        }

        .btn {
            background-color: #4285f4;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .btn:hover {
            background-color: #3367d6;
        }

        footer {
            background-color: #3c4043;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>

<header>
    <h1>Google Classroom Clone</h1>
</header>

<nav>
    <a href="#">Home</a>
    <a href="#">Classes</a>
    <a href="#">Assignments</a>
    <a href="#">Grades</a>
    <a href="#">Profile</a>
</nav>

<div class="container">
    <div class="sidebar">
        <h2>My Classes</h2>
        <ul>
            <li><a href="#">Mathematics 101</a></li>
            <li><a href="#">Science 102</a></li>
            <li><a href="#">History 103</a></li>
            <li><a href="#">English 104</a></li>
        </ul>
    </div>

    <div class="main-content">
        <div class="card">
            <h3>Classroom Overview</h3>
            <p>Welcome to your virtual classroom. Select a class from the sidebar to begin.</p>
        </div>

        <div class="card">
            <h3>Assignments</h3>
            <div class="task">
                <p>Mathematics: Solve the equations on page 50.</p>
                <button class="btn">Submit Assignment</button>
            </div>
            <div class="task">
                <p>Science: Complete the lab report.</p>
                <button class="btn">Submit Assignment</button>
            </div>
        </div>

        <div class="card">
            <h3>Upcoming Events</h3>
            <p>No upcoming events right now. Check back later!</p>
        </div>
    </div>
</div>

<footer>
    <p>&copy; 2024 Google Classroom Clone. All Rights Reserved.</p>
</footer>

</body>
</html>
