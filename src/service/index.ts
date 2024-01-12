import axios from "axios";

export class Service {
  static async get(url: string, params = {}, additionalHeader = {}) {
    try {
      const res = await axios.get(url, {
        params,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${additionalHeader}`,
        },
      });

      return {
        error: false,
        errorMessage: "",
        response: res.data,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response }: any = error;
        return {
          error: true,
          errorMessage: response?.data.message || "",
          response: "",
        };
      }

      if (error instanceof Error) {
        const { message } = error;
        return {
          error: true,
          errorMessage: message,
          response: "",
        };
      }

      return {
        error: true,
        errorMessage: error,
        response: "",
      };
    }
  }

  static async post(url: string, body = {}, additionalHeader = {}) {
    try {
      const res = await axios.post(url, body, additionalHeader);

      return {
        error: false,
        errorMessage: "",
        response: res.data,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response }: any = error;
        return {
          error: true,
          errorMessage: response?.data.message || "",
          response: "",
        };
      }

      if (error instanceof Error) {
        const { message } = error;
        return {
          error: true,
          errorMessage: message,
          response: "",
        };
      }

      return {
        error: true,
        errorMessage: error,
        response: "",
      };
    }
  }

  static async postCloudinary(url: string, body = {}) {
    try {
      const res = await axios.post(url, body);

      return {
        error: false,
        errorMessage: "",
        response: res.data,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response }: any = error;
        return {
          error: true,
          errorMessage: response?.data.message || "",
          response: "",
        };
      }

      if (error instanceof Error) {
        const { message } = error;
        return {
          error: true,
          errorMessage: message,
          response: "",
        };
      }

      return {
        error: true,
        errorMessage: error,
        response: "",
      };
    }
  }

  static async delete(url: string, body = {}, additionalHeader = {}) {
    try {
      const res = await axios.delete(url, {
        data: body,
        headers: {
          Authorization: `Bearer ${additionalHeader}`,
        },
      });

      return {
        error: false,
        errorMessage: "",
        response: res.data,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response }: any = error;
        return {
          error: true,
          errorMessage: response?.data.message || "",
          response: "",
        };
      }

      if (error instanceof Error) {
        const { message } = error;
        return {
          error: true,
          errorMessage: message,
          response: "",
        };
      }

      return {
        error: true,
        errorMessage: error,
        response: "",
      };
    }
  }

  static async put(url: string, body = {}, additionalHeader = {}) {
    try {
      const res = await axios.put(url, body, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${additionalHeader}`,
        },
      });

      return {
        error: false,
        errorMessage: "",
        response: res.data,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response }: any = error;
        return {
          error: true,
          errorMessage: response?.data.message || "",
          response: "",
        };
      }

      if (error instanceof Error) {
        const { message } = error;
        return {
          error: true,
          errorMessage: message,
          response: "",
        };
      }

      return {
        error: true,
        errorMessage: error,
        response: "",
      };
    }
  }

  static async patch(url: string, body: {}, additionalHeader = {}) {
    try {
      const res = await axios.patch(url, body, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${additionalHeader}`,
        },
      });

      return {
        error: false,
        errorMessage: "",
        response: res.data,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        return {
          error: true,
          errorMessage: response?.data.message || "",
          response: "",
        };
      }

      if (error instanceof Error) {
        const { message } = error;
        return {
          error: true,
          errorMessage: message,
          response: "",
        };
      }

      return {
        error: true,
        errorMessage: error,
        response: "",
      };
    }
  }
}
