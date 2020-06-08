enum HTTP_STATUS {
  // 2xx family
  OK = 200,
  CREATED = 201,

  // 4xx family
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
}

export default HTTP_STATUS;
