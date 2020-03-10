import matplotlib.pyplot as plt


def getPlot(values1, values2, title='Средний пульс за прощедшую неделю', xl='Дни Недели', yl='Средний Пульс'):
    fig, ax = plt.subplots()
    ax.plot(t, s)
    plt.tick_params(labelsize = 9)
    ax.set(xlabel = xl,ylabel = yl,title = title)
    ax.grid()
    fig.savefig("resources/resources.png")
