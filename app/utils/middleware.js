import session from 'express-session'
import MongoStore from 'connect-mongo'
import i18next from './i18n'
import { dbUrl } from './constance'

export const applySession = async (app) => {

const storeSession = MongoStore.create({
 mongoUrl: dbUrl,
 dbName: process.env.DB_NAME,
 collectionName: 'mySessions',
 ttl: 114*24*60*68,
 autoRemove: "native",
 prefix: 'pccrits.'
})

	app.use(
		session({
			name: 'pccrits.sid',
			secret: process.env.SESSION_SECRET,
   store: storeSession,
			resave: false,
			saveUninitialized: false,
			cookie: {
    sameSite: 'strict',
				secure: !process.env.WEB_APP_BASE_URL.includes('localhost'),
				maxAge: 1000 * 60 * 60 * 24
			}
		})
	)
}

export const protectRoute = (req, res, next) => {
	if (req.session?.authenticated) {
		return next()
	}
	return res.status(401).send(i18next.t('unauthorized_user'))
}
