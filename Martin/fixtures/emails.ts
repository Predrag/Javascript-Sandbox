interface Emails {
  id: string,
  from: string,
  to: string,
  subject: string,
  body: string
}

export const emails: Emails[] = [
	{	id: '1',
		from: '1',
		to: '2',
		subject: 'Hello!',
		body: 'Hi, nice to meet you.'},
	{
		id: '2',
		from: '2',
		to: '1',
		subject: 'aHOJ!',
		body: 'Rad ta vidim'
	}
];
