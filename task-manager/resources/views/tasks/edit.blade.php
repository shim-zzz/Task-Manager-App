<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit task</title>
</head>
<body>

    <h1>Edit Task</h1>

    <form action="{{ route('tasks.update', $task->id) }}" method="POST">
        @csrf
        @method('PUT')

        <label>Task Title:</label>
        <input type="text" name="title" value="{{ $task->title }}" required>

        <br><br>

        <label>Description:</label>
        <textarea name="description">{{ $task->description }}</textarea>

        <br><br>

        <label>
            <input type="checkbox" name="completed" value="1"
                {{ $task->completed ? 'checked' : '' }}>
            Completed
        </label>

        <br><br>
</body>
</html>