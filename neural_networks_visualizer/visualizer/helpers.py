import mpld3
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')


def return_graph():
    fig = plt.figure()
    plt.plot([1, 2, 3, 4])
    g = mpld3.fig_to_html(fig, no_extras=True,
                          template_type="simple", figid="test-plot")
    return g
