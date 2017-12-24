# Email Markup (View Action) Generator

#### It generates json-ld & microdata for email list on gmail 

Email Markup => Go-To Actions => [ViewAction](https://developers.google.com/gmail/markup/reference/go-to-action#view_action)

https://developers.google.com/gmail/markup/reference/go-to-action#view_action


![alt text](https://developers.google.com/gmail/markup/images/actions-go-to-action.png)

Example from [ViewAction](https://developers.google.com/gmail/markup/reference/go-to-action#view_action) web site
```html
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EmailMessage",
  "potentialAction": {
    "@type": "ViewAction",
    "target": "https://watch-movies.com/watch?movieId=abc123",
    "name": "Watch movie"
  },
  "description": "Watch the 'Avengers' movie online"
}
</script>
```

### Output 

![alt text](screenshots/output.png)