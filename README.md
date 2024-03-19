## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## 已有功能

- css 样式 tailwind
- 字体 ❌
- 图片Image
- layout.tsx 和 page.tsx 创建路由
- 导航 Link
  - `import { usePathname } from 'next/navigation';`
  - `const pathname = usePathname();`
- 数据库 Postgres
  - vercel新建数据库并连接仓库
  - .env同步配置
  - pnpm i @vercel/postgres 然后sql
  - 创建npm run seed
  - sql练习 TODO:
- 获取数据 以及promise.all
- 动态渲染和静态渲染
  - 静态渲染可以CDN分发让网页更快，减少服务器负载，SEO
  - 动态渲染好处：实时数据，个性化内容，请求时信息（cookie url）
  - `import { unstable_noStore as noStore } from 'next/cache';`
  - `noStore()`
- streaming流解决一个接口阻塞页面问题
  - loading.tsx页面级别，可以通过（）路由组来设置loading的范围
  - 请求不要状态提升，写到每个组件里
- Partial Prerendering 部分预渲染
  - 只要用suspense，next会自动知道哪些动态哪些静态
- 搜索和分页

  - url params的好处 共享/服务端渲染/跟踪
  - ## useSearchParams usePathname useRouter

    ```js
    import { useSearchParams, usePathname, useRouter } from 'next/navigation';

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      console.log(params.toString());
      replace(`${pathname}?${params.toString()}`);
    }
    ```

  - 更改数据
    - server action
    - `const rawFormData = Object.fromEntries(formData.entries())`
    - app/lib/actions.ts
    - 传id到服务器可以`const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);`这样传参数

##

```js
function fn(urls, maxNumber) {
  const arr = [];
  urls.forEach((url) => {
    arr.push(fetch(url));
  });
  const num = maxNumber;
  const foo = (array) => {
    num++;
    if (num === urls.length) return;
    Promise.race(array).then((res) => {
      foo(array.slice(num, num + 1));
    });
  };

  foo(arr.slice(0, maxNumber));
}
```
