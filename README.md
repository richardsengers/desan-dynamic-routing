# DynamicRouting for survey

To start run ``npm install`` when finished run ``npm start``

Your server will be available at ``localhost:4200``

#### Routing
We need at least 2 layers of routing to get customer surveys.
For example ``/hbo/2019`` 
The first routing will be the customer, the second routing will be the version oid.
So when you start ``localhost:4200`` you will get a 404 page

``localhost:4200/hbo/2019`` will be the root of your project. This way we can theme our app based on the customer.

We can now show a login page when not logged in ``localhost:4200/hbo/2019`` or ``localhost:4200/hbo/2019?auth=0``
Or we can show a survey view ``localhost:4200/hbo/2019?auth=1``

Offcourse this is only for testing purpose.

#### Desan general stuff
We can even serve our own stuff. for example ``localhost:4200/404`` or ``localhost:4200/login``

