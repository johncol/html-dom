import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Data: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
## Get the data attribute's value

~~~ javascript
// Get the \`data-message\` attribute of the \`ele\` element
const message = ele.getAttribute('data-message');

// Or
const message = ele.dataset.message;
~~~

## Set the data attribute's value

~~~ javascript
ele.setAttribute('data-message', 'Hello World');

// Or
ele.dataset.message = 'Hello World';
~~~

## Remove the data attribute

~~~ javascript
ele.removeAttribute('data-message');

// Or
delete ele.dataset.message;
~~~

Note that calling \`delete ele.dataset\` doesn't remove all data attributes.
`}
/>
<RelatedTasks tasks={[TaskType.Attribute]} />
</>
    );
};

export default Data;