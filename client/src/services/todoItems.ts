
export interface TodoItem {
    id: string;
    name: string;
    dueDate: string;
    description: string;
    priority: string;
}

export class TodoItem {
    public static async getAll(): Promise<any> {
      const data = await fetch('http://localhost:8080/todoList');
      if (!data.ok) {
            throw new Error('Failed to get todo Items');
          }
          return data.json();

  };
        public static async find(id: string): Promise<any> {
        const data = await fetch(`http://localhost:8080/todoList/${id}`);
          if (!data.ok) {
            throw new Error('Failed to get todo Items');
          }
          return data.json();
        };
    

    public static async add(data: any): Promise<TodoItem> {
    const response = await fetch('http://localhost:8080/todoList', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

    if (!response.ok) {
      throw new Error('Failed to get todo Items');
    }
    return TodoItem.getAll();
    };

  public static async update(id: string| undefined, data: any): Promise<TodoItem[]> {
  const response = await fetch(`http://localhost:8080/todoList/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ ...data, id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to update Todo Item');
  }
  return TodoItem.getAll();
};
    
public static async delete(id: string): Promise<TodoItem[]> {
  const response = await fetch(`http://localhost:8080/todoList/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to delete item');
    }
    return TodoItem.getAll();
};

}