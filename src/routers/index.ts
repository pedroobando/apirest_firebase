import { Router } from 'express';
import { db } from '../firebase';

const routes = Router();

routes.get('/', async (req, res) => {
  try {
    const querySnapshot = await db.collection('contacts').get();
    const contacts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.render('index', { contacts });
  } catch (error) {
    console.error(error);
  }
});

routes.post('/new-contact', async (req, res) => {
  const { firstname, lastname, email, phone } = req.body;
  await db.collection('contacts').add({
    firstname,
    lastname,
    email,
    phone,
  });
  res.redirect('/');
});

routes.get('/delete-contact/:id', async (req, res) => {
  await db.collection('contacts').doc(req.params.id).delete();
  res.redirect('/');
});

routes.get('/edit-contact/:id', async (req, res) => {
  const doc = await db.collection('contacts').doc(req.params.id).get();
  res.render('index', { contact: { id: doc.id, ...doc.data() } });
});

routes.post('/update-contact/:id', async (req, res) => {
  const { firstname, lastname, email, phone } = req.body;
  const { id } = req.params;
  await db.collection('contacts').doc(id).update({ firstname, lastname, email, phone });
  res.redirect('/');
});

export { routes };
