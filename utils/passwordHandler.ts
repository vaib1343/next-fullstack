import bcrypt from 'bcrypt';

const generatePass = (password: string) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
};

const verifyPass = (password: string, userPassword: string) => {
    if (password && userPassword) {
        return bcrypt.compareSync(password, userPassword);
    }
};

export { generatePass, verifyPass };
