## CSS SELECTORS
**Attribute Selectors**
* `[href*=algoexpert.io]` would select all elements with an href attribute with the text "algoexpert.io" at any location.
* `[href^=algoexpert.io]` would select all elements with an href attribute with the text "algoexpert.io" at the beginning of the value.
* `[href$=algoexpert.io]` would select all elements with an href attribute with the text "algoexpert.io" at the end of the value.

**Combinators**
* Descendant combinator: Represented by a single space, in the format `selector1 selector2`. Selects all elements that match `selector2` and are descendant of an element matching `selector1`. A descendant does not need to be a direct child (e.g., the selected element's grandparent could match `selector1`).
* Child combinator: Represented by `>`, in the format `selector1 > selector2`. Selects all elements that match `selector2` and are direct child of an element matching `selector1`. 
* Sibling combinator: Represented by `~`, in the format `selector ~ selector2`. Selects all elements that match `selector2` and are sibling of an element matching `selector1`. The element matching `selector2` must come after the element matching `selector1`. 
* Adjacent sibling combinator: Represented by `+`, in the format `selector1 + selector2`. Selects elements that match `selector2` and have an element matching `selector1` directly before them in the DOM.

## PSEUDO CLASSES & ELEMENTS
**Pseudo Class**
An addition to a CSS selector for selecting based on the current state of the element. These start with `:`.

**Pseudo Element**
An addition to a CSS selector for selecting a specific portion of the element. These start with `::`.

## SELECTOR SPECIFICITY
* The most "specific" selector is used.
* Defaults to the last rule in the stylesheet.

**Specificity**: The algorithm used by the browser to determine which CSS declarations to use when an element is selected by two rulesets with the same property. 

* Inline styles (those written in the html): 1000
* IDs: 100
* Classes: 10
* Pseudo-classes: 10
* Attributes: 10
* Elements: 1
* Pseudo-elements: 1

The `!important` overides specificity. Avoid using if possible.
```css
a {
    color: orange !important;
}
```

## CSS UNITS
* `px`: absolute length. 
* `em`: Relative to the font size. For example, if the font size is `14px`, then `1.5em` would be `21px`. If the `em` unit is used to set font size, it will be relative to the parent's font size. 
* `rem`: Relative to the root element's font size. By default, this is usually `16px`, but it can be overriden by the user stylesheet. Moreover, the author stylesheets can change this by setting a font size on the `html` selector or the `:root` pseudo class. For example, by default `1.5rem` will be `24px`.
* `%`: A percentage, usually of the parents value for the same property. For example, a width of `50%` would be half the size of the parent element's width.
* `vw`: A percentage of the *width* of the viewport, for example `50vw` would be half of the width of the viewport. Widths & heights relative to viewport.    
* `vh`: A percentage of the *height* of the viewport, for example `50vh` would be half of the height of the viewport. 
* `ch`: The number of characters on a line, based on the size of the "0" character in the element's font. This can be useful to prevent paragraphs from spanning more then ~70 characters width, which can become hard to read. (e.g., width of 60 characters).
### Widths & Heights
* `%`: To be relative to parent.
* `vw/vh`: To be relative to viewport.
* `ch`: For paragraph widths.
* `rem`: For closer to absolute values.
* `px`: As last resort
### Margin/Paddings
* `rem`: For closer to absolute values.
* `em`: To scale with font-size.
* `px`: For small values, as last resort.
### Borders/Shadows
* `rem`/`em`: For small values.
* `px`: okay here to, scaling doesn't always look great.
### Font Size
* `rem`: is usually best.
* `em`: To escale to parent size.
* `px`: last resort.

## BLOCK VS. INLINE
`display`

**Block Element**
* `block`
* They start on new lines.
* By default they span the entire width of their parent.

**Inline Element**
* `inline`
* They start immediately after the content before them. without a new line.
* They span the width of their content.
* `width` and `height` properties have no effect on them.
* Examples:
    - `<a>`
    - `<span>`
    - `<strong>` Bold text (semantically indicates importance).
    - `<em>` Italic text (semantically indicates emphasis).
    - `<img>`
    - `<input>`
    - `<label>`
    - `<code>`
* Vertical margin & padding has no effect on inline elements.

**Inline-Block Element**
* `inline-block`
* They start inmediately after the content before them, without a new line.
* They span the width of their content by default, but this can be changed.
* It is like `inline` but you can still use custom `width` and `height`.

## BOX MODEL
A box surrounding all elements on the document used for layout. From inside to out, this consists of the **content**. **padding**, **border** and **margin**.
* Margin is the *minimum* space between the selected element and another element.

## BOX SIZING
* `box-sizing: content-box`: Default value in most elements. `width` does not include padding, margin or border.
* `box-sizing: border-box`: `width` includes padding, margin and border.

It is commonly that people set `border-box` as universal style.
```css
* {
    box-sizing: border-box;
} 
```  

## POSITION
A CSS property for setting how the browser should position an element in the document.
* `static`: The default value, the element follows the flow of the document.
* `fixed`: The element is positioned relative to the viewport and removed from the normal flow of the document. The `top`, `left`, `right` and `bottom` properties can then be used to move the element.
* `relative`: The element is positioned in the same place as it would with `static`, however, it can be repositioned with `top`, `left`, `right`, and `bottom` relative to its natural position on the document.
* `sticky`: The element will act similar to a `relative` positioned element, but once it scrolls off screen it will stay fixed to the screen, essentially actined as `position: fixed`. This is particularly useful for menu bars that need to "stick" to the top of the screen as the user scrolls. Mixture `relative` and `fixed`.
* `absolute`: Be default, this will act the same as `fixed`, except the element will be positioned relative to the document instead of viewport. It removes the element from the normal document flow. This means that, as the page is scrolled, it will move with the page rather than stay at the same viewport location. However, if any element above it in the DOM, often times referred to as an ancestor, has a position value other that `static`, then it will be positioned relative to nearest positioned ancestor.

Other things to consider:
* `float` -> Paragraph wrapping around the box. "Take this element and push it to one side of its container and then allow the elements below it to just wrap around it wherever there's empty space on the other side". Example: You want text to flow around the image.

## STACKING CONTEXT
A group of elements positioned together on the z-axis. Stacking contexts can be nested within other stacking contexts, and `z-index` values are used to determine the layering of elements with the same **stacking context parent**.

## FLEXBOX
A layout model, also known  as the **Flexible Box Layout Module**, particularly useful for building responsive designs with a row and column layouts. An element can be made a **flex container** with `display: flex`, and all of its direct children will automatically be laid out as **flex items**.

For flex containers, these are some of the most common properties used to layout their flex items:

* `flex-direction`: Determines which direction is the main-axis, either `row` or `column`. Additionally, `row-reverse` and `column-reverse` can be used to reverse the order of flex items.
* `justify-content`: Determines how elements are positioned along the main-axis with possible values of `flex-start`, `flex-end`, `center`, `space-around`, `space-between`, and `space-evenly`.
* `align-items`: Determines how elements are positioned along the cross-axis (the one not selected by `flex-direction`). Possible values are `flex-start`, `flex-end`, `center`, `baseline`, and stretch.
* `flex-wrap`: Determines if flex items can wrap to new lines with the possible values of `wrap` and `nowrap`, `wrap-reverse` can also be used to wrap flex items with the lines in reverse order.
* `align-content`: Determines how lines are positioned along the cross-axis when flex items are wrapping on multiple lines. Possible values are `flex-start`, `flex-end`, `center`, `space-around`, `space-between`, and `stretch`.
* `flex-flow`: A shorthand for `flex-direction` and `flex-wrap`.
* `gap`: Determines the amount of space between flex items. This can take one or two length values. If it is given two, they will be treated as a row gap and a column gap respectively. Alternatively, a `row-gap` and `column-gap` property can be specified to individually set the gap between rows and columns.

For flex items, these are some of the most common properties used to position themselves:
* `align-self`: Overrides the `align-items` value used for the flex container.
* `flex-grow`: Determines if the flex item is able to grow into extra space. If the value is 0, the flex item will not grow. Otherwise, it will take up as much extra space as possible, with larger grow values taking more space proportionally. For example, if item A has a value of 1 and item B  has a value of 2, then item B will take up twice as much extra space as item A (Note this does not mean it will be twice as large, only that it will take twice as much of the extra space).
* `flex-shrink`: Determines if a flex item is able to shrink in the case that the flex items are too large for the container. Flex items with a value of 0 will not shrink. Otherwise they will all shrink proprotionally based on their values, similar to flex grow. The higher the value, the more the flex item will proportionally shrink.
* `flex-basis`: Sets the initial size of the flex item along the main-axis (essentially this will act as width for the row axis and height for the column axis).
* `flex`: A shorthand property for `flex-grow`, `flex-shrink`, and `flex-basis` in that order.
* `order`: Moves the flex-item to a different location amongst the other flex items rather than using the order defined in the DOM. All flex items default to having a value of 0. This means a value of -1 would move an item before all other items that have not changed their order. Likewise, a value of 1 would place the item at the end.

## WORKING WITH IMAGES
* HTML: Images are part of the content.
* CSS: Image is for styling. Removing it would not change page meaning.

Image Spritting: Include multiple images in one file. More bandwidth efficient. 

## CSS INHERITANCE
How elements choose a value when none has been explicitly declared in any stylesheet. All properties are either **inherited properties** or **non-inherited properties**. Inherited properties will take their parent's value in the case no value has been set for the property. Non-inherited properties on the other hand will be set to `initial` in this case.

While the default groupings of inherited and non-inherited properties is usually all that's needed, this can be changed by using any of these values for any declaration:
* `inherit`: The value should inherit from its parent, regarless of if it is normally an inherited property.
* `initial`: The value should be set to the value defined in the CSS specification. Note this is oftentimes different from browser defaults.
* `unset`: The value should be set to `inherit` if it is normally an inherited property, otherwise `initial`. This can be useful for "resetting" browser defaults from the **user agent stylesheet**.
* `revert`: The value should revert back to the next stylesheet in the cascade. For author stylesheets, this would act as if the author did not write any declaration for the property, but it would still honor the user agent and user stylesheets as normal. 