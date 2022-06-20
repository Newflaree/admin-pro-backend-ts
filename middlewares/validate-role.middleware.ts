import { NextFunction, Response } from "express";
// Interfaces
import { UserAuthRequest } from "../interfaces/http-interfaces";


export const validateRole = async ( req: UserAuthRequest, res: Response, next: NextFunction ) => {

  if ( !req.user ) {
    return res.status( 500 ).json({
      ok: false,
      msg: 'You want to verify the role without validate token before'
    });
  }

  try {
    const { role, name } = req.user;
    console.log( role, name );

    if ( role !== 'ADMIN_ROLE' ) {
      return res.status( 401 ).json({
        ok: false,
        msg: `${ name } is not an ADMIN`
      });
    }

    next();

  } catch ( err ) {
    console.log( `${ '[MIDDLEWARE.VALIDATE-ROLE]'.red }: Error details - ${ err }` );
    res.status( 401 ).json({
      ok: false,
      msg: 'Token is invalid'
    });
  }
}
