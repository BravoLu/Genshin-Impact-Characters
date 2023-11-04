class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(url: string): Promise<T> {
    const response = await fetch(this.baseUrl + url);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  }

  async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(this.baseUrl + url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  }

  async put<T>(url: string, body: any): Promise<T> {
    const response = await fetch(this.baseUrl + url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(this.baseUrl + url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  }
}

const create = (baseUrl: string) => new HttpClient(baseUrl); 

export default create;