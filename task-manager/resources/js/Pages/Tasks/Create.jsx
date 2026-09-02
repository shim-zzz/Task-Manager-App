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
}