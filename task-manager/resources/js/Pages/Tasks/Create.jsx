import { Link, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post('/tasks');
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
            <h1>Task Manager</h1>

            <h2>Add New Task</h2>

            <form onSubmit={submit}>

                <div style={{ marginBottom: '20px' }}>
                    <label
                        style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: 'bold'
                        }}
                    >
                        Task
                    </label>

                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) =>
                            setData('title', e.target.value)
                        }
                        placeholder="Enter a new task"
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

                    {errors.title && (
                        <p style={{ color: 'red' }}>
                            {errors.title}
                        </p>
                    )}
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
                        value={data.description}
                        onChange={(e) =>
                            setData('description', e.target.value)
                        }
                        placeholder="Enter task description"
                        rows="5"
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

                <button
                    type="submit"
                    disabled={processing}
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
                    {processing ? 'Adding...' : 'Add Task'}
                </button>

            </form>

            <br />

            <Link href="/tasks">
                ← Back to Tasks
            </Link>
        </div>
    );
}