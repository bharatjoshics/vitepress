# Different Ways of Utilizing / Using Vue
## There are two ways
(i)**Vue can be used to control parts of HTML pages or entire pages.** 
    "Widget" approach on a multi-page-application. Some pages are still rendered on and served by a backend server.

            ----------------------------------------------
            |                                             |
            |                Heading                      |
            |                                             |
            -----------------------------------------------
            ------------------  ---------------------------
            |                |  |                         |
            |                |  |        Section-1        |
            |                |   ---------------------------
            |      (VUE)     |   ---------------------------
            |   Section-A    |  |          (VUE)          |
            |                |  |        Section-2        |
            |                |   ---------------------------
            |                |   ---------------------------
            |                |  |                         |
            |                |  |        Section-3        |
            ------------------  ---------------------------
        
        Here only "Section-A" and "Section-2" is controlled by VUE JS.
        Heading and other sections are still rendered by a backend server.

    
(ii)**Vue can also be used to control the entire frontend of a web application**
    "Single-Page-Application" (SPA) approach. Server only sends one HTML page, thereafter Vue takes over and control the UI.

            |---------------------------------------------------| 
            |                       (VUE)                       |
            |  |---------------------------------------------|  |
            |  |                                             |  |
            |  |               Heading                       |  |
            |  |                                             |  |
            |  -----------------------------------------------  | 
            |  ------------------  ---------------------------  |
            |  |                |  |                         |  |
            |  |                |  |        Section-1        |  |
            |  |                |   --------------------------  |
            |  |      (VUE)     |   --------------------------  |
            |  |   Section-A    |  |          (VUE)          |  |
            |  |                |  |        Section-2        |  |
            |  |                |   --------------------------  |
            |  |                |   --------------------------  |
            |  |                |  |                         |  |
            |  |                |  |        Section-3        |  |
            |  ------------------  ---------------------------  |
            |                                                   |
            |---------------------------------------------------|

        Here the whole application is controlled by VUE JS.