<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Task;



class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::all();

        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tasks/Create');
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'nullable'
        ]);

        Task::create([
            'title' => $request->title,
            'description' => $request->description
        ]);

        return redirect()->route('tasks.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $task = Task::findOrFail($id);

        return Inertia::render('Tasks/Edit', [
            'task' => $task
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
{
    $request->validate([
        'title' => 'required',
        'description' => 'nullable',
        'completed' => 'nullable|boolean',
    ]);

    $task = Task::findOrFail($id);

    $task->update([
        'title' => $request->title,
        'description' => $request->description,
        'completed' => $request->boolean('completed'),
    ]);


}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
