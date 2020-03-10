import matplotlib.pyplot as plt

"""

@created by AnteeOne
@version 1.0

Module with method , which returns new plot as png file

Parameters:
    values1  - list of values , located on the axis of abscissa
    values2  - list of values , located on the axis of ordinate (f(values1))
    title    - title of plot
    x1       - title of axis of abscissa
    y1       - title of axis of ordinate
    imgtitle - title of image png file
    
    
"""

def getPlot(values1, values2, title='Plot', xl='x', yl='y', imgtitle="plot"):
    fig, ax = plt.subplots()
    ax.plot(values1, values2)
    plt.tick_params(labelsize=9)
    ax.set(xlabel=xl, ylabel=yl, title=title)
    ax.grid()
    fig.savefig("resources/" + imgtitle)
