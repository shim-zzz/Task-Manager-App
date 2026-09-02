import { useState } from 'react';
import { Link, router } from '@inertiajs/react';

export default function Edit({ task }) {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description || '');
    const [completed, setCompleted] = useState(Boolean(task.completed));

    const submit = (e) => {
        e.preventDefault();

        router.patch(`/tasks/${task.id}`, {
            title: title,
            description: description,
            completed: completed ? 1 : 0,
        });
    };

    return (
        <div
            style={{
                padding: '40px',
                fontFamily: 'Arial',
                maxWidth: '600px',
                margin: '0 auto'
            }}
        >
            <h1>Edit Task</h1>

            <form onSubmit={submit}>

                <div style={{ marginBottom: '20px' }}>
                    <label
                        style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: 'bold'
                        }}
                    >
                        Task Title
                    </label>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #555',
                            borderRadius: '6px',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label
                        style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: 'bold'
                        }}
                    >
                        Description
                    </label>

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="6"
                        style={{
                            width: '100%',
                            padding: '12px',
                            border: '2px solid #555',
                            borderRadius: '6px',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={(e) => setCompleted(e.target.checked)}
                        />

                        {' '}Completed
                    </label>
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        padding: '12px 20px',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    Update Task
                </button>

            </form>

            <br />

            <Link href="/tasks">
                ← Back to Tasks
            </Link>
        </div>
    );
}