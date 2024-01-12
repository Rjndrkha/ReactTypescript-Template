import { Service } from "..";

export default class TodosClient {
  static async GetAllTodos() {
    const { response, error, errorMessage } = await Service.get(
      `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_BASE_TODOS_URL}`
    );

    return { response, error, errorMessage };
  }
}
