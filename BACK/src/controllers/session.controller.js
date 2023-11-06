import { generateToken } from "../utils/jwt.js";

export const login = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).send({ mensaje: "Usuario invalido" })
        }

        const token = generateToken(req.user)

        res.status(200).send({ token })
    } catch (error) {
        res.status(500).send({ mensaje: `Error al iniciar sesion ${error}` })
    }

}

export const register = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(400).send({ mensaje: "Usuario ya existente" })
        }

        res.status(200).send({ mensaje: 'Usuario registrado' })
    } catch (error) {
        res.status(500).send({ mensaje: `Error al registrar usuario ${error}` })
    }
}

export const logout = async (req, res) => {
    res.clearCookie('jwtCookie')
    res.status(200).send({ resultado: 'Usuario deslogueado' })
}