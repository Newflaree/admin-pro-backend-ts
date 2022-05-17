import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
// Models
import { User } from '../../models';
import {generateJWT} from '../../helpers/jwt/generate-jwt.helper';

export const authLogin = async ( req: Request, res: Response ) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Check if email exists
    if ( !user ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Check if user is acitve
    if ( !user.status ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Check if password is valid
    const validPass = bcrypt.compareSync( password, user.password );
    if ( !validPass ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Generate JWT
    const token = await generateJWT( user._id );

    res.status( 200 ).json({
      ok: true,
      user,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH.LOGIN]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
