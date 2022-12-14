# unity-todo

## Set Up

```sh
$ git clone git@github.com:OHMORIYUSUKE/unity-todo.git
$ cd unity-todo
$ docker compose up -d
$ npm install
$ npm run prisma:generate
$ npm run prisma:migrate
$ npm run prisma:seed
$ npm run dev
```

> M1 mac の場合は Docker ビルド時に`--platform linux/amd64`を指定してください。
> https://toyo.hatenablog.jp/entry/2022/03/02/234159

## URL

### API

http://localhost:3000/

### PHPMyadmin

http://localhost:3030/

prisma_db の中の Todo テーブルにデータがあります。

## API

エンドポイント`http://localhost:3000/`

### GET

`/todo`

```json
[
  {
    "id": 1,
    "message": "Testメッセージ1",
    "createdAt": "2022-10-18T08:47:27.971Z",
    "updatedAt": "2022-10-18T08:47:27.971Z"
  },
  {
    "id": 2,
    "message": "Testメッセージ2",
    "createdAt": "2022-10-18T08:47:28.056Z",
    "updatedAt": "2022-10-18T08:47:28.056Z"
  },
  {
    "id": 3,
    "message": "Testメッセージ3",
    "createdAt": "2022-10-18T08:47:28.113Z",
    "updatedAt": "2022-10-18T08:47:28.113Z"
  }
]
```

`/todo/:id`

```json
{
  "id": 1,
  "message": "Testメッセージ1",
  "createdAt": "2022-10-18T08:47:27.971Z",
  "updatedAt": "2022-10-18T08:47:27.971Z"
}
```

### POST

`/todo`

body

```json
{ "message": "テスト" }
```

response

```json
{
  "message": "inserted"
}
```

### DELETE

`/todo`

body

```json
{ "id": "1" }
```

response

```json
{
  "message": "inserted"
}
```

### 不正なリクエスト

- 不正なリクエスト(POST, DELETE)はステータスコード 500 が返ります

- 不正なリクエスト(GET)はステータスコード 404 または 500 が返ります
