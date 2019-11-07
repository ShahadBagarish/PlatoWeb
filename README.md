# Plato 

Plato provides recipes for food from around the world.

## Description

Plato is react web application that helps the user to search around number of different food categories and view the ingredients and instructions of how to cooke it.
cheak the URL (https://www.youtube.com/watch?v=lkxs_W8Bd78&feature=youtu.be )

### Technical Used

```
Example:

- React js 
- Node js
- React route
- Bootstrap 
- Semantic UI
- Axios
```

### User Stories

```

User must be able to:
- viewing the home page with healthy tips and different plates images 
- Select the food categories 
- View different recipes of that category 
- Select the favorite recipes 
- View instructions to cook it.

```

---

## Planning and Development Process
- find an API works well and provide data for free 
- Inspired the idea 
- Sketch the wireframes and the series hierarchy between components 
- Start design component
- Use route to go around pages 
- Take the data from API and use it with component 
- Finally, review and clean the code  

### Problem-Solving Strategy

Using the inspect tool provide by chrome to view all the console log() print to detect data


## APIs Used

- (https://www.themealdb.com/api/json/v1/1/random.php) for generate random recipes each load
- (https://www.themealdb.com/api/json/v1/1/categories.php) find the recipes category
- (https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.idCategory}) filter meal by it's categories
- (https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.idMeal}) filter meal by it's is's

---

 ## References
- [Bootstrab react](https://react-bootstrap.netlify.com/)
- [Semantic UI](https://react.semantic-ui.com/)
- [React Rout](https://reacttraining.com/react-router/web/guides/quick-start)


