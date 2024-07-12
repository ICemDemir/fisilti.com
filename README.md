# fisilti.com

This is a single page application designed to work as an affiliate marketing website. My first project that I built all by myself.

Backend has been handled with supabase.
There are sign up and log in features. If you're not an authenticated user, you'll not be able to see the content of an article.
When you sign up, you are authenticated as the viewer.
There are also two other roles, which are writer and admin.
Writers can add and edit articles.
Admins can add, edit and delete articles.

Api is fetched by react query and distributed to the components mainly by context api and also by using custom hooks. This leads to perfomance issue because of too many context apis, I'm aware.

For routing, React Router is used.
For styling, styled components are mainly used.
Some hooks that are mainly used are useState, useEffect, useNavigate, useForm, useQuery, useQueryClient, useMutation, useLocation, useParams, useSearchParams and so on.

There is a functioning searchbar. And some other features applied on the page are sorting according to category or by date and pagination.

It is an application with a responsive layout. You can display the page on all kinds of devices.

If you would like to see the actions restricted to authenticated users like writer or admin, please dm me.
