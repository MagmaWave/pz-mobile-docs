---
sidebar_position: 6
---

# Definindo os Asset Paths

Que um projeto unity é dividido em pastas e subpastas já sabemos. Mas e caso tenhamos centenas de assets e sprites para nos preocupar? teremos que importar e definir todos eles na unha? **Como a unity vai saber em quais pastas estão meus assets?**

Separe alguns minutos do seu tempo. Vamos entender **como fazer isso da maneira correta**!

## Entendendo as estruturas

Um projeto `Unity` é composto por várias pastas e subpastas.

```md title="Representação de Pastas na Unity"
📁Assets
|-- 📂Textures
|   |--📄Skin.png
|   |--📄Armor.png
|-- 📂Scripts
|   |--📄Player.cs
|   |--📄Enemy.cs
```

Cada uma destas pastas armazena seus respectivos arquivos correspondentes, tornando fácil a busca e a compreensão do projeto. Mas o computador sabe onde estão os arquivos?

Quando se tem apenas alguns arquivos como no exemplo anterior fica fácil referenciar estes arquivos por meio do codigo csharp, porém quando temos centenas de arquivos isto se torna uma tarefa mais complexa.

```csharp title="Exemplo de referencia de arquivos em csharp"
using UnityEngine;

public class ExemploReferenciaArquivo : MonoBehaviour
{
    // Referência para um arquivo de textura
    public Texture2D textura;

    // Referência para um arquivo de áudio
    public AudioClip clipDeAudio;

    // Referência para um arquivo de modelo 3D
    public GameObject modelo3D;
    
    // Referência para um arquivo de script
    public ScriptOutroComponente scriptOutroComponente;
}
```

Neste exemplo podemos ver que é simples. No unity editor seria somente arrastar o elemento correspondente para dentro do inspetor para referencia-lo.

## Referenciando Assets
Agora vamos aprender como fazer isso com varios arquivos de uma unica vez.

Para fins de aprendizado vamos referenciar os assets dentro de `Assets/Textures`.

Abra a pasta mencionada e clique com o botão direito do mouse para abrir o menu **Create>PZ>Asset Paths**.

![](/img/asset-path-menu.png)

Um novo arquivo chamado Paths irá aparecer.

![](/img/paths-file.png)

Renomeie para **TexturePaths**.

No inspector irá aparecer uma lista de paths vazios. Trave o isnpector clicando sobre o cadeado no canto superior direito.

![](/img/texture-paths-inspector.png)

Selecione todas as pastas que deseja incluir na lista de paths.

![](/img/paths-selected.png)

:::danger Cuidado

Selecione apenas os arquivos que deseja incluir no path, caso algum erro ocorra, exclua o arquivo criado e repita os passos.

:::

Clique sobre o `+` abaixo de `List is empty`.

![](/img/add-paths.png)

O resultado deve ser algo semelhante a imagem abaixo:

![](/img/paths-result.png)

## Conclusão

Agora os paths estão devidamente referenciados e podem ser acessados de uma forma muito mais rápida e organizada. Outro arquivo como este pode ser criado na raiz da pasta Assets onde são referenciados todos os outros arquivos como este e então atraves de um unico arquivo teremos todos os caminhos devidamente referenciados, acessivel de forma fácil pelos scripts da nossa aplicação. Mas isto é assunto para um próximo tópico.