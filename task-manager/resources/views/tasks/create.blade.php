<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Task</title>
</head>
<body>
    
    <h1>Add New Task</h1>

        <form action="{{ route('tasks.store') }}" method="POST">
            @csrf

            <label>Task Title:</label>
            <input type="text" name="title" required>

            <br><br>

            <label>Description:</label>
            <textarea name="description"></textarea>

            <br><br>
            
        </form>

</body>
</html>