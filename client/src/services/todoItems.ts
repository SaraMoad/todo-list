
export interface TodoItem {
    id: string;
    name: string;
    dueDate: string;
    description: string;
    priority: string;
}

export class TodoItem {
    public static async getAll(): Promise<any> {
        try {
            const data = await fetch('http://localhost:8080/todoList');
            const jsonData = await data.json();
            return jsonData
        }
        catch (e) {
            console.log(e)
        }

    }
        public static async find(id: string): Promise<any> {
        const data = await fetch(`http://localhost:8080/todoList/${id}`);
        return data.json();
    }

    public static async add(data: any): Promise<TodoItem> {
  const response = await fetch('http://localhost:8080/todoList', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to get posts');
  }
  return response.json();
    };

public static async update(data: any): Promise<Response> {
  const response = await fetch(`http://localhost:8080/todoList/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to get posts');
  }
  return response.json();
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
    console.log(response)
    return TodoItem.getAll();
};

}