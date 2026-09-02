import { Link, router } from '@inertiajs/react';

export default function Index({ tasks }) {

    const deleteTask = (id) => {
        if (confirm('Are you sure you want to delete this task?')) {
            router.delete(`/tasks/${id}`);
        }
    };

    const toggleComplete = (task) => {
        router.patch(`/tasks/${task.id}`, {
            title: task.title,
            description: task.description,
            completed: !task.completed,
        });
    };

    return (
        <div style={{ padding: '40px', fontFamily: 'Arial' }}>

            <h1>Task Manager</h1>

            <Link href="/tasks/create">
                <button>Add New Task</button>
            </Link>

            <hr />

            {tasks.length === 0 ? (
                <p>No tasks found.</p>
            ) : (
                tasks.map(task => (
                    <div
                        key={task.id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '20px',
                            marginBottom: '15px'
                        }}
                    >
                        <h2>{task.title}</h2>

                        <p>{task.description}</p>

                        <p>
                            Status:{' '}
                            {task.completed
                                ? 'Completed'
                                : 'Pending'}
                        </p>

                        <button
                            onClick={() => toggleComplete(task)}
                        >
                            {task.completed
                                ? 'Mark as Pending'
                                : 'Mark as Completed'}
                        </button>

                        {' '}

                        <Link href={`/tasks/${task.id}/edit`}>
                            <button>Edit</button>
                        </Link>

                        {' '}

                        <button
                            onClick={() => deleteTask(task.id)}
                            style={{ color: 'red' }}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}

        </div>
    );
}