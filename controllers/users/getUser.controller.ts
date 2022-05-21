import { Request, Response } from 'express';
import { User } from '../../models';

export const getUser = async ( req: Request, res: Response ) => {
  const { id } = req.params;

  try {
    const user = await User.findById({ _id: id }) || { status: false };

    if ( !user.status ) {
      return res.status( 400 ).json({
        ok: false,
        msg: 'There is no user with that id'
      });
    }

    res.status( 200 ).json({
      ok: true,
      user
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-USER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}
