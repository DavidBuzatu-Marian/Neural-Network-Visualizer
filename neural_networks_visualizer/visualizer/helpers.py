import mpld3
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')


def return_graph():
    fig = plt.figure()
    plt.scatter([1, 10], [5, 9])
    g = mpld3.fig_to_html(fig, no_extras=True,
                          template_type="general")
    return g
