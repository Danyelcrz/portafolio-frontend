const validarEmail = ( email ) => {
    const emailRegex = /\b[\w.!-_#$%&*+\/=?{|}]+@[\w-_]+(?:\.[\w]+)+\b/;
    return emailRegex.test(email);
}

export { validarEmail };