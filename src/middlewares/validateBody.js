import createHttpError from 'http-errors';

export const validateBody = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
    } catch (error) {
      next(
        createHttpError(
          400,
          JSON.stringify(error.details.map((err) => err.mesage)),
        ),
      );
    }
  };
};
