// Homepage route controller class

// static method
class AppController {
  /**
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @return {Object} - Response object
   */
  static getHomepage(req, res) {
    return res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
