import Joi from 'joi'
import {joiResolver} from '@hookform/resolvers/joi'

const signUpSchema = Joi.object(
    {
        name: Joi.string().required().messages({'string.empty': `This field is required`,}),
        email: Joi.string().email(
            {
                minDomainSegments: 2,
                tlds: {allow: ['com', 'net', 'xyz']},
            }
        ).messages({
            'string.empty': `This field is required`,
            'string.email': `Please enter a valid email`,
          })
        ,
        password: Joi.string().pattern(/^[A-Za-z]\w{7,14}$/).messages({
            'string.empty': `This field is required`,
            'string.pattern.base': `Password must contain atleast a capital latter and a number`,
        }),
        confirmPass: Joi.string().required().valid(Joi.ref('password')).messages({
            'string.empty': `This field is required`,
            'any.only': `Password and Confirm Password do not matched`,
        }),
    },
);

export const signResolver = joiResolver(signUpSchema)