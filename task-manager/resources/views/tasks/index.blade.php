<!DOCTYPE html>
<html>
<head>
    <title>Task Manager</title>
</head>
<body>

    <h1>Task Manager</h1>

    <a href="{{ route('tasks.create') }}">Add New Task</a>

    <hr>

    @foreach ($tasks as $task)
        <div>
            <h3>{{ $task->title }}</h3>

            <p>{{ $task->description }}</p>

            @if ($task->completed)
                <p>Completed</p>
            @else
                <p>Pending</p>
            @endif

            <a href="{{ route('tasks.edit', $task->id) }}">Edit</a>

            <form action="{{ route('tasks.destroy', $task->id) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit">Delete</button>
            </form>
        </div>

        <hr>
    @endforeach

</body>
</html><!DOCTYPE html>
<html>
<head>
    <title>Task Manager</title>
</head>
<body>

    <h1>Task Manager</h1>

    <a href="{{ route('tasks.create') }}">Add New Task</a>

    <hr>

    @foreach ($tasks as $task)
        <div>
            <h3>{{ $task->title }}</h3>

            <p>{{ $task->description }}</p>

            @if ($task->completed)
                <p>Completed</p>
            @else
                <p>Pending</p>
            @endif

            <a href="{{ route('tasks.edit', $task->id) }}">Edit</a>

            <form action="{{ route('tasks.destroy', $task->id) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit">Delete</button>
            </form>
        </div>

        <hr>
    @endforeach

</body>
</html>