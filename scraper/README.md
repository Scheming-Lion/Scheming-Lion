### Web scraper
> submits get requests to Hacker News' API endpoints, and then appends the data to a text file, which we will later parse and enter into our data base

### How to use
1. Modify index.html
  1. On lines 21 and 22, set start and end values to be a difference of 2,000.
    * For example, start could be 0; the end would be 2,000.
  1. Change the for-loop on line 26
    * If moving upward, that is start < end
      * for(var i = start; i < end; i++)
    * If moving downward, that is start > end
      * for(var i = start; i > end; i--)
  1. Change how the variables update on lines 52 and 53
    * If moving upward
      * Both declarations should be +=
    * If moving downward
      * Both declarations should be -=
1. Modify scraper.js 
  1. Change the filename on line 32
    * The 'items' numbers should be the same as your beginning and end values from index.html.
    * For example: 'items-0-2000.txt' for start of 0 and end of 2000.

